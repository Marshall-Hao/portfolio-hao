import Logo from "./Logo";
import NextLink from "next/link";
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
} from "@chakra-ui/icons";
import { ReactNode, forwardRef } from "react";

type TProps = {
  href: string;
  path: string;
  children: ReactNode;
  target: HTMLAnchorElement;
};

const LinkItem = ({
  href,
  path,
  target,
  children,
  ...props
}: TProps) => {
  const active = path === href;
  const inactiveColor = useColorModeValue(
    "gray.800",
    "whiteAlpha.900"
  );
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? "grassTeal" : undefined}
      color={active ? "#202023" : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  );
};

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
));

type NProps = {
  path: string;
};

const NavBar = (props: NProps) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      style={{ backdropFilter: "blur(10px" }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        flexWrap="wrap"
        textAlign="center"
        justifyContent="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading
            as="h1"
            size="lg"
            letterSpacing="tighter"
          >
            <Logo></Logo>
          </Heading>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem>
        </Stack>

        <Box flex={1} textAlign="right">
          <Box
            ml={2}
            display={{ base: "inline-block", md: "none" }}
          >
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
              />
              <MenuList>
                <MenuItem as={MenuLink} href="/">
                  About
                </MenuItem>
                <MenuItem as={MenuLink} href="/works">
                  Works
                </MenuItem>
                <MenuItem as={MenuLink} href="/posts">
                  Posts
                </MenuItem>
                <MenuItem
                  as={MenuLink}
                  href="https://uses.craftz.dog/"
                >
                  Uses
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NavBar;
