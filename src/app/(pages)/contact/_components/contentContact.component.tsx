'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { sendMail } from "@/lib/sendMail";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast"

const contactFormSchema = z.object({
    name: z.string().min(3, { message: 'Por favor, insira seu nome' }),
    phone: z.string().min(9, { message: 'Por favor, insira seu telefone' }),
    email: z.string().email({ message: 'Por favor, insira seu email' }),
    message: z
        .string()
        .min(10, { message: 'Por favor, insira seu a descrição com no minimo 10 caracteres' }),
});

export const ContentContactComponent = () => {
    const { toast } = useToast()
    const form = useForm<z.infer<typeof contactFormSchema>>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            message: '',
        },
    });

    // const isLoading = form.formState.isSubmitting;
    const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
        const mailText = `Nome: ${values.name}\nEmail: ${values.email}\nTelefone: ${values.phone}\nDescricao: ${values.message}`;
        const response = await sendMail({
            email: values.email,
            subject: 'New Contact Us Form',
            text: mailText,
        });
        if (response) {
            toast({
                title: "Scheduled: Catch up",
                description: "Friday, February 10, 2023 at 5:57 PM",
              })
        } else {
        }
    };

    return (
        <div className="grid grid-cols-1 mx-auto p-4 max-w-2xl">
            <h3 className="text-lg font-medium">
                Se você se identifica com o perfil da empresa e busca se destacar no mercado de trabalho, venha fazer parte desta equipe.
            </h3>
            <section className="mt-10">
                <Form {...form}>
                    <form
                        className="grid items-center gap-4"
                        onSubmit={form.handleSubmit(onSubmit)}
                    >
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="Nome completo" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex gap-4">
                            <div className="w-full">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input placeholder="Insira seu email" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="Telefone " {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex gap-4 mt-4">
                            <Button className="px-8 py-4 rounded-full font-bold border-0" variant={"secondary"}>Escolher arquivo</Button>
                        </div>
                        <div className="mt-4">
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Textarea
                                                {...field}
                                                placeholder="Insira sua descrição"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex mt-4 justify-end">
                            <Button className="px-8 py-4 rounded-full font-bold border-0">Enviar</Button>
                        </div>
                    </form>
                </Form>
            </section>
        </div>
    )
}