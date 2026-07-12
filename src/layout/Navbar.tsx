import { logo } from "../assets/assets";
import { Flex, Image, Text } from "@chakra-ui/react";
import { Link, useLocation } from "react-router";

const Navbar = () => {
    const location = useLocation();

    const routes = [
        { label: "HOME", path: "/" },
        { label: "ABOUT US", path: "/about-us" },
        { label: "PORTFOLIO", path: "/portfolio" },
        { label: "SERVICES", path: "/services" },
        { label: "CONTACT US", path: "/contact" },
    ];

    return (
        <Flex
            w="100%"
            h="100px"
            px="2%"
            alignItems="center"
            justifyContent="space-between"
        >
            <Flex alignItems="center" h="100%" w="max-content">
                <Image mt={2} src={logo} h="60%" />
            </Flex>

            <Flex alignItems="center" h="100%" gap={8}>
                {routes.map((route) => (
                    <Link key={route.path} to={route.path}>
                        <Text 
                        px={2} pb={1}
                            color={
                                location.pathname === route.path ? "#C8A96B" : "#FFFFFF"
                            }
                            fontWeight={
                                location.pathname === route.path ? "500" : "400"
                            }

                            borderBottom={
                                location.pathname === route.path ? "2px solid #C8A96B" : "none"
                            }

                            transition="0.2s"
                            _hover={{
                                color: "#C8A96B",
                            }}
                        >
                            {route.label}
                        </Text>
                    </Link>
                ))}
            </Flex>
        </Flex>
    );
};

export default Navbar;