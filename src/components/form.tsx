import { createContext, useContext, useId } from 'react';

import {
  Controller,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
  FormProvider,
  type UseFormReturn,
  useFormContext,
  useFormState,
} from 'react-hook-form';

import { cn } from '@/utils';

import { Slot } from './slot';
import { Label, type LabelProps } from './ui';

export interface FormProps<
  TFieldValues extends FieldValues,
  TContext = any,
  TTransformedValues = TFieldValues,
> extends React.ComponentProps<'form'> {
  form: UseFormReturn<TFieldValues, TContext, TTransformedValues>;
}

const Form = <
  TFieldValues extends FieldValues,
  TContext = any,
  TTransformedValues = TFieldValues,
>({
  form,
  children,
  ...props
}: FormProps<TFieldValues, TContext, TTransformedValues>) => {
  return (
    <FormProvider {...form}>
      <form {...props}>{children}</form>
    </FormProvider>
  );
};

export interface FormFieldProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> extends Omit<ControllerProps<TFieldValues, TName>, 'render' | 'control'> {
  className?: string;
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
  className,
  children,
  ...props
}: FormFieldProps<TFieldValues, TName>) => {
  const formContext = useFormContext<TFieldValues, any, TFieldValues>();
  const id = useId();

  return (
    <FormFieldContext.Provider value={{ name }}>
      <Controller
        control={formContext.control}
        name={name}
        render={(...args) => (
          <FormItemContext.Provider value={{ id }}>
            <div className={cn('flex flex-col gap-2', className)} {...props}>
              {children(...args)}
            </div>
          </FormItemContext.Provider>
        )}
        {...props}
      />
    </FormFieldContext.Provider>
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

  return <Label error={!!error} htmlFor={formItemId} {...props} />;
};

// TODO: autoComplete 없으면 타입 및 런타임 에러 띄우게 하자

const FormControl = ({
  children,
  ...props
}: React.ComponentProps<typeof Slot>) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      id={formItemId}
      aria-describedby={
        error ? `${formDescriptionId} ${formMessageId}` : formDescriptionId
      }
      aria-invalid={!!error || undefined}
      error={!!error}
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

// TODO: --gray-11 도 semantic하게 처리하자

const FormMessage = ({
  className,
  children,
  ...props
}: React.ComponentProps<'p'>) => {
  const { error, formMessageId } = useFormField();
  const message = error ? (error.message ?? '') : children;

  if (!message) {
    return null;
  }

  return (
    <p
      id={formMessageId}
      className={cn(
        'text-caption',
        error ? 'text-danger' : 'text-(--gray-11)',
        className,
      )}
      {...props}
    >
      {message}
    </p>
  );
};

const FormImpl = Object.assign(Form, {
  Field: FormField,
  Label: FormLabel,
  Control: FormControl,
  Description: FormDescription,
  Message: FormMessage,
});

export { FormImpl as Form };
