import { createContext, useContext, useId } from 'react';

import {
  Controller,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
  FormProvider,
  useFormContext,
  useFormState,
} from 'react-hook-form';

import { cn } from '@/utils';

import { Slot, type SlotProps } from './slot';
import { Label, type LabelProps } from './ui';

const Form = FormProvider;

export interface FormFieldProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> extends Omit<ControllerProps<TFieldValues, TName>, 'render'> {
  children: ControllerProps<TFieldValues, TName>['render'];
}

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
);

type FormItemContextValue = {
  id: string;
};

const FormItemContext = createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);

const FormField = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  name,
  children,
  ...props
}: FormFieldProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name }}>
      <Controller name={name} render={children} {...props} />
    </FormFieldContext.Provider>
  );
};

const FormItem = ({ className, ...props }: React.ComponentProps<'div'>) => {
  const id = useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div className={cn('flex flex-col gap-2', className)} {...props} />
    </FormItemContext.Provider>
  );
};

const useFormField = () => {
  const formContext = useFormContext();

  const fieldContext = useContext(FormFieldContext);
  if (!fieldContext) {
    throw new Error('useFormField must be used within a FormField');
  }
  const { name } = fieldContext;

  const itemContext = useContext(FormItemContext);
  if (!itemContext) {
    throw new Error('useFormField must be used within a FormItem');
  }
  const { id } = itemContext;

  const formState = useFormState({ name });
  const fieldState = formContext.getFieldState(name, formState);

  return {
    id,
    name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

const FormLabel = ({ className, ...props }: LabelProps) => {
  const { error, formItemId } = useFormField();

  return <Label error={error != undefined} htmlFor={formItemId} {...props} />;
};

const FormControl = ({ children, ...props }: SlotProps) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      id={formItemId}
      aria-describedby={
        error ? `${formDescriptionId} ${formMessageId}` : formDescriptionId
      }
      aria-invalid={!!error || undefined}
      {...props}
    >
      {children}
    </Slot>
  );
};

const FormDescription = ({
  className,
  children,
  ...props
}: React.ComponentProps<'p'>) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      id={formDescriptionId}
      className={cn('text-caption text-(--gray-11)', className)}
      {...props}
    >
      {children}
    </p>
  );
};

const FormMessage = ({
  className,
  children,
  ...props
}: React.ComponentProps<'p'>) => {
  const { error, formMessageId } = useFormField();
  const content = error ? (error.message ?? '') : children;

  if (!content) {
    return null;
  }

  return (
    <p
      id={formMessageId}
      className={cn('text-caption text-danger', className)}
      {...props}
    >
      {content}
    </p>
  );
};

const FormImpl = Object.assign(Form, {
  Field: FormField,
  Item: FormItem,
  Label: FormLabel,
  Control: FormControl,
  Description: FormDescription,
  Message: FormMessage,
});

export { FormImpl as Form };
