import {
    Box,
    Button,
    Flex,
    Grid,
    Image,
    Text,
} from "@chakra-ui/react";
import { GoArrowRight } from "react-icons/go";
import { farmhousefull, entrance, outerarea } from '../../assets/assets'
const Projects = () => {
    return (
        <Box
            w="100%"
            bg="white"
            minH={{
                base: "auto",
                lg: "100vh",
            }}
        >
            <Grid
                minH={{
                    base: "auto",
                    lg: "100vh",
                }}
                templateColumns={{
                    base: "1fr",
                    lg: "58% 42%",
                }}
            >
                {/* Left Image */}

                <Flex h="100%">
                    <Image
                        src={farmhousefull}
                        w="100%"
                        h="100%"
                        objectFit="cover"
                    />
                </Flex>

                {/* Right Content */}

                <Flex
                    px={{
                        base: 8,
                        md: 12,
                        lg: 16,
                        xl: 20,
                    }}
                    py={{
                        base: 12,
                        lg: 0,
                    }}
                    justifyContent="center"
                    alignItems="center"
                    bg="white"
                >
                    <Box
                        maxW="470px"
                        w="100%"
                    >
                        {/* Heading */}

                        <Text
                            color="#444"
                            fontWeight="400"
                            fontSize={{
                                base: "22px",
                                md: "28px",
                            }}
                        >
                            A Contemporary
                        </Text>

                        <Text
                            mt={1}
                            fontWeight="700"
                            lineHeight="1"
                            color="#1F1F1F"
                            fontSize={{
                                base: "42px",
                                md: "56px",
                            }}
                        >
                            Farmhouse
                        </Text>

                        <Flex
                            alignItems="flex-end"
                            gap={2}
                            flexWrap="wrap"
                        >
                            <Text
                                fontWeight="700"
                                lineHeight="1"
                                fontSize={{
                                    base: "42px",
                                    md: "56px",
                                }}
                            >
                                Rooted
                            </Text>

                            <Text
                                mb="6px"
                                color="#444"
                                fontSize={{
                                    base: "22px",
                                    md: "28px",
                                }}
                            >
                                in Indian Heritage
                            </Text>
                        </Flex>

                        {/* Description */}

                        <Text
                            mt={8}
                            color="#555"
                            lineHeight="1.8"
                            fontSize={{
                                base: "15px",
                                md: "16px",
                            }}
                        >
                            Kalpadhan Farm, a thoughtfully designed weekend
                            and holiday retreat where modern design,
                            vernacular architecture, and Indian craftsmanship
                            come together in harmony with the landscape.
                        </Text>

                        {/* Gallery */}

                        <Flex
                            mt={10}
                            gap={4}
                        >
                            <Image
                                src={entrance}
                                flex={1}
                                h={{
                                    base: "120px",
                                    md: "140px",
                                }}
                                objectFit="cover"
                                borderRadius="16px"
                            />

                            <Image
                                src={outerarea}
                                flex={1}
                                h={{
                                    base: "120px",
                                    md: "140px",
                                }}
                                objectFit="cover"
                                borderRadius="16px"
                            />
                        </Flex>

                        {/* CTA */}

                        <Button
                            mt={10}
                            bg="#1F1F1F"
                            color="white"
                            h="56px"
                            px={8}
                            borderRadius="10px"
                            _hover={{
                                bg: "#000",
                            }}
                        >
                            <Flex
                                alignItems="center"
                                gap={3}
                            >
                                Explore Project
                                <GoArrowRight size={20} />
                            </Flex>
                        </Button>
                    </Box>
                </Flex>
            </Grid>
        </Box>
    )
}

export default Projects