import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box>
      <Header />
      <Flex width="100%" maxWidth={1480} marginX="auto" paddingX="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} backgroundColor="gray.800" padding="8">
          <Flex marginBottom="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>
            
            <Link href="/users/create" passHref>
              <Button 
                as="a" 
                size="sm" 
                fontSize="sm" 
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20"/>}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th paddingX={["4", "6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                { isWideVersion && <Th>Data de cadastro</Th>}
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td padding={["4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Marco Túlio Teles</Text>
                    <Text fontSize="sm" color="gray.300">marcotuliocivileng@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>26 de Abril, 2021</Td> }
                <Td>
                </Td>
              </Tr>
              <Tr>
                <Td padding={["4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Marco Túlio Teles</Text>
                    <Text fontSize="sm" color="gray.300">marcotuliocivileng@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>26 de Abril, 2021</Td> }
                <Td>
                </Td>
              </Tr>
              <Tr>
                <Td padding={["4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Marco Túlio Teles</Text>
                    <Text fontSize="sm" color="gray.300">marcotuliocivileng@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>26 de Abril, 2021</Td> }
                <Td>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>

      </Flex>
    </Box>
  )
}