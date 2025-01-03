import {Flex,Text,FormControl,FormLabel,Select,Button,Input} from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';
import CardHeader from "components/Card/CardHeader.js";
import './CustomCardHeader.css';

const CustomCardHeader = (
   props
) => {
    return (
        <CardHeader
                  p="0px 0px 22px 0px"
                  display="block"
                  width="100%"
                  background="#67B8B8"
                >
                  <Flex
                    flexWrap="wrap"
                    flexDirection={{ base: "column", sm: "row" }}
                    background="#287979"
                    width="100%"
                    padding="10px"
                    marginBottom="5px"
                  >
                    <Text fontSize="lg" color="#FFECCD" font="Weight:bold">
                      {props.title}
                    </Text>
        
                  </Flex>
                    <Flex
                      color="black"
                      flexWrap="wrap"
                      flexDirection={{ base: "column", sm: "row" }}
                      justifyContent="left"
                      alignContent="left"
                      width="50%"
                      mx="auto"
                      alignItems="left"
                      background="#62ACAB"
                    >
                        {
                            props.showSellerField && (
                                <FormControl id="lotteryCategoryName" isRequired px="7px" mt="0px"> 
                   
                                    <FormLabel mt="0px">Choose Seller</FormLabel>
                                    <Select
                                        onChange={(event) =>
                                        props.setSelectedSellerId(event.target.value)
                                        }
                                        width="100%"
                                        background="#649F9F"
                                    >
                                        <option value={""} style={{ backgroundColor: "#e3e2e2" }}>
                                        Choose Seller
                                        </option>
                                        {props.sellerInfo.map((info) => (
                                        <option
                                            key={info._id}
                                            value={info._id}
                                            style={{ backgroundColor: "#e3e2e2" }}
                                        >
                                            {info.userName}
                                        </option>
                                        ))}
                                    </Select>
                                </FormControl>
                            )
                        }

                        {
                            props.showLotteryField && (
                                <FormControl id="lotteryCategoryName" isRequired px="7px" mt="0px">
                                    <FormLabel mt="0px">
                                        Lottery
                                    </FormLabel>
                                    <Select
                                        onChange={(event) =>
                                        props.setLotteryCategoryName(event.target.value)
                                        }
                                        width="100%"
                                        background="#649F9F"
                                    >
                                        <option value={""} style={{ backgroundColor: "#e3e2e2" }}>
                                        Choose Lottery
                                        </option>
                                        {props.lotteryCategories.map((category) => (
                                        <option
                                            key={category._id}
                                            value={category.lotteryName}
                                            style={{ backgroundColor: "#e3e2e2" }}
                                        >
                                            {category.lotteryName}
                                        </option>
                                        ))}
                                    </Select>
                                </FormControl>
                            )
                        }

                        {
                            props.showFromField && (
                                <FormControl id="fromDate" isRequired  px="7px" mt="0px">
                                    <FormLabel mt="0px">
                                        From
                                    </FormLabel>
                                    <Input
                                        type="date"
                                        value={props.fromDate}
                                        onChange={(event) => props.setFromDate(event.target.value)}
                                        width="100%"
                                        minWidth="100%"
                                        background="#649F9F"
                                    />
                                </FormControl>
                            )
                        }
                        {
                            props.showToDate && (
                                <FormControl id="toDate" isRequired px="7px" mt="0px">
                                    <FormLabel mt="0px">
                                        To
                                    </FormLabel>
                                    <Input
                                        type="date"
                                        value={props.toDate}
                                        onChange={(event) => props.setToDate(event.target.value)}
                                        width="100%"
                                        minWidth="100%"
                                        background="#649F9F"
                                    />
                                </FormControl>
                            )   
                        }

                        <Button
                            size="sm"
                            onClick={props.handleSearch}
                            bg={props.colorMode === "light" ? "#FF4500" : "#FF4500"}
                            _hover={{
                            bg: props.colorMode === "light" ? "#FF4500" : "#FF4500",
                            }}
                            mt="10px"
                            mx={"10px"}
                            color="white"
                            mb="10px"
                            alignSelf="left"
                            borderRadius="4px"
                        >
                            {/* <CgSearch size={20} color={"white"} /> */}
                            Search
                        </Button>
                    </Flex>
                </CardHeader>
    )
};

CustomCardHeader.propTypes = {
    title: PropTypes.string.isRequired,
    setSelectedSellerId: PropTypes.func.isRequired,
    sellerInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
    setLotteryCategoryName: PropTypes.func.isRequired,
    lotteryCategories: PropTypes.arrayOf(PropTypes.object).isRequired,
    fromDate: PropTypes.string,
    setFromDate: PropTypes.func.isRequired,
    toDate: PropTypes.string,
    setToDate: PropTypes.func,
    showToDate: PropTypes.bool,
    showSellerField: PropTypes.bool,
    showLotteryField: PropTypes.bool,
    showFromField: PropTypes.bool,
    handleSearch: PropTypes.func.isRequired,
    colorMode: PropTypes.string.isRequired
};

CustomCardHeader.defaultProps = {
    showToDate: true,
    showSellerField:true,
    showLotteryField:true,
    showFromField:true
}

export default CustomCardHeader;