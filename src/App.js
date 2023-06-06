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
import { RiDeleteBin7Line, RiEdit2Fill } from "react-icons/ri";
const App = () => {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);
  const addHandler = () => {
    setListData((listData) => {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: activity,
      };
      const updatedList = [...listData, allInputData];
      console.log(updatedList);
      setActivity("");
      return updatedList;
    });
  };
  const RemoveElement = (index) => {
    const updatedListData = listData.filter((elem) => {
      return index !== elem.id;
    });
    setListData(updatedListData);
  };
  const Removeall = () => {
    setListData([]);
  };

  const editButton = (id) => {
    const objIndex = listData.find((elem) => {
      return elem.id === id;
    });
    console.log(objIndex);
  };
  return (
    <Container mt="8" w={"full"} >
      
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
      <Box boxShadow={"lg"} mt="3" borderRadius={"2xl"}>
        <VStack>
          {listData.map((el) => (
            <HStack key={el.id}>
              <UnorderedList>
                <ListItem
                  textColor={"ThreeDShadow"}
                  fontFamily={"monospace"}
                  fontSize={"xl"}
                  fontWeight={"extrabold"}
                >
                  {el.name}
                </ListItem>
              </UnorderedList>

              <Button
                size={"sm"}
                variant={"ghost"}
                colorScheme="purple"
                onClick={() => RemoveElement(el.id)}
              >
                <RiDeleteBin7Line />
              </Button>
              <Button onClick={() => editButton(el.id)}>
                <RiEdit2Fill />
              </Button>
            </HStack>
          ))}
          {listData.length >= 1 && (
            <Button
              colorScheme="purple"
              variant="solid"
              mb="2"
              onClick={() => Removeall()}
              borderRadius={"2xl"}
            >
              Remove all
            </Button>
          )}
        </VStack>
      </Box>
    </Container>
  );
};

export default App;
