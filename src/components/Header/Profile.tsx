import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box marginRight="4" textAlign="right">
          <Text>Marco Túlio Teles</Text>
          <Text color="gray.300" fontSize="small">
            marcotuliocivileng@gmail.com
        </Text>
        </Box>
      )}
      <Avatar size="md" name="Marco Túlio" src="https://github.com/marcotulioteles.png" />
    </Flex>
  )
}