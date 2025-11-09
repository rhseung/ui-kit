import { zodResolver } from '@hookform/resolvers/zod';
import { createFileRoute } from '@tanstack/react-router';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Form, TextField, TextFieldGroup } from '@/components';

export const Route = createFileRoute('/')({
  component: App,
});

const schema = z.object({
  email: z.string().min(1),
});

function App() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = (data: z.infer<typeof schema>) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="flex w-[540px] flex-col gap-2 p-5">
      <Form
        form={form}
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-2 grid-rows-2 gap-8"
      >
        <Form.Field name="email">
          {({ field }) => (
            <>
              <Form.Label required>Email</Form.Label>
              <Form.Control>
                <TextFieldGroup>
                  <TextFieldGroup.TextField placeholder="rhseung" {...field} />
                  <span className="text-body text-(--gray-11)">@gmail.com</span>
                </TextFieldGroup>
              </Form.Control>
              <Form.Description>
                This field's value: {field.value}
              </Form.Description>
              <Form.Message />
            </>
          )}
        </Form.Field>
        <Form.Field name="email">
          {({ field }) => (
            <>
              <Form.Label required>Email</Form.Label>
              <Form.Control>
                <TextField placeholder="rhseung" {...field} />
              </Form.Control>
              <Form.Description>
                This field's value: {field.value}
              </Form.Description>
              <Form.Message />
            </>
          )}
        </Form.Field>
        <Form.Field name="email">
          {({ field }) => (
            <>
              <Form.Label required>Email</Form.Label>
              <Form.Control>
                <TextFieldGroup variant="underline">
                  <TextFieldGroup.TextField placeholder="rhseung" {...field} />
                  <span className="text-body text-(--gray-11)">@gmail.com</span>
                </TextFieldGroup>
              </Form.Control>
              <Form.Description>
                This field's value: {field.value}
              </Form.Description>
              <Form.Message />
            </>
          )}
        </Form.Field>
        <Form.Field name="email">
          {({ field }) => (
            <>
              <Form.Label required>Email</Form.Label>
              <Form.Control>
                <TextField
                  variant="underline"
                  placeholder="rhseung"
                  {...field}
                />
              </Form.Control>
              <Form.Description>
                This field's value: {field.value}
              </Form.Description>
              <Form.Message />
            </>
          )}
        </Form.Field>
      </Form>
    </div>
  );
}
