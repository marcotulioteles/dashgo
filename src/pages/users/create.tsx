import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import Link from "next/link";

import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

type CreateUserFormData = {
  name: string,
  email: string,
  password: string,
  password_confirmation: string,
};

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().required('e-mail é obrigatório').email(),
  password: yup.string().required('senha é obrigatório').min(6, 'No mínimo 6 caracteres'),
  password_confirmation: yup.string().oneOf([
     null,
     yup.ref('password')
  ], 'As senhas precisam ser iguais'),
})

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema)
  })

  const { errors } = formState

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(values);
  }

  return (
    <Box>
      <Header />
      <Flex width="100%" maxWidth={1480} marginX="auto" paddingX="6">
        <Sidebar />

        <Box 
          as="form" 
          flex="1" 
          borderRadius={8} 
          backgroundColor="gray.800" 
          padding={["6", "8"]}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">Criar Usuário</Heading>
        
          <Divider marginY="6" borderColor="gray.700"/>

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">
              <Input 
                name="name" 
                label="Nome Completo"
                error={errors.name} 
                {...register('name')}
              />
              <Input 
                name="email" 
                type="email" 
                label="E-mail"
                error={errors.email}
                {...register('email')}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">
              <Input 
                name="password" 
                type="password"
                error={errors.password} 
                label="Senha" 
                {...register('password')}
              />
              <Input 
                name="password_confirmation" 
                type="password"
                error={errors.password_confirmation} 
                label="Confirmação da Senha" 
                {...register('password_confirmation')}
              />
            </SimpleGrid>
          </VStack>

          <Flex marginTop="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button 
                type="submit" 
                colorScheme="pink"
                isLoading={formState.isSubmitting}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>

      </Flex>
    </Box>
  )
}