import React, { useState } from "react";
import {
  Button,
  Container,
  Input,
  HStack,
  VStack,
  Box,
  ListItem,
  UnorderedList,
  Heading,
  Text,
} from "@chakra-ui/react";
import { RiDeleteBin7Line } from "react-icons/ri";
const App = () => {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);
  const addHandler = () => {
    setListData((listData) => {
      const updatedList = [...listData, activity];
      console.log(updatedList);
      setActivity("");
      return updatedList;
    });
  };
  const RemoveElement = (i) => {
    const updatedListData = listData.filter((elem, id) => {
      return i !== id;
    });
    setListData(updatedListData);
  };
  const Removeall = () => {
    setListData([]);
  };
  return (
    <Container mt="8" py='16'>
      <Heading
        children="my TodoList"
        textTransform={"uppercase"}
        textAlign={"center"}
        fontFamily={"mono"}
      />
      <HStack mt={"4"}>
        <Input
          type="text"
          placeholder="Enter here"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <Button
          size={"md"}
          variant={"outline"}
          colorScheme="yellow"
          onClick={() => addHandler()}
        >
          Enter to add
        </Button>
        
      </HStack>
      <Text
        children="Your list is here"
        textAlign={"center"}
        fontSize={"xl"}
        fontFamily={"monospace"}
        mt="4"
      />
      <Box h={"fit-content"} boxShadow={"lg"} mt="3" borderRadius={'2xl'}>
        <VStack>
          {listData.map((el, i) => (
            <HStack key={i}>
              <UnorderedList>
                <ListItem
                  textColor={"ThreeDShadow"}
                  fontFamily={"monospace"}
                  fontSize={"xl"}
                  fontWeight={"extrabold"}
                >
                  {el}
                </ListItem>
              </UnorderedList>

              <Button
                size={"sm"}
                variant={"ghost"}
                colorScheme="purple"
                onClick={() => RemoveElement(i)}
              >
                <RiDeleteBin7Line />
              </Button>
            </HStack>
          ))}
          {
            listData.length >=1 && <Button colorScheme='purple' variant='solid' mb='2' onClick={()=>Removeall()} borderRadius={'2xl'}>
            Remove all
            </Button>
          }
        </VStack>
      </Box>
    </Container>
  );
};

export default App;
