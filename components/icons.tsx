import { FontAwesome6 } from "@expo/vector-icons";

const DEFAULT_ICON_SIZE = 24;
const DEFAULT_ICON_STYLE = "solid";

export const IconHome = (props: { color: string }) => (
  <FontAwesome6
    name="house"
    size={DEFAULT_ICON_SIZE}
    color={props.color}
    iconStyle={DEFAULT_ICON_STYLE}
  />
);

export const IconInfo = (props: { color: string }) => (
  <FontAwesome6
    name="circle-info"
    size={DEFAULT_ICON_SIZE}
    color={props.color}
    iconStyle={DEFAULT_ICON_STYLE}
  />
);

export const IconNews = (props: { color: string }) => (
  <FontAwesome6
    name="newspaper"
    size={DEFAULT_ICON_SIZE}
    color={props.color}
    iconStyle={DEFAULT_ICON_STYLE}
  />
);

export const IconContact = (props: { color: string }) => (
  <FontAwesome6
    name="address-card"
    size={DEFAULT_ICON_SIZE}
    color={props.color}
    iconStyle={DEFAULT_ICON_STYLE}
  />
);

export const IconService = (props: { color: string }) => (
  <FontAwesome6
    name="handshake"
    size={DEFAULT_ICON_SIZE}
    color={props.color}
    iconStyle={DEFAULT_ICON_STYLE}
  />
);

export const IconEdit = (props: { color: string }) => (
  <FontAwesome6
    name="pencil"
    size={DEFAULT_ICON_SIZE}
    color={props.color}
    iconStyle={DEFAULT_ICON_STYLE}
  />
);

export const IconBadge = (props: { color: string }) => (
  <FontAwesome6
    name="certificate"
    size={DEFAULT_ICON_SIZE}
    color={props.color}
    iconStyle={DEFAULT_ICON_STYLE}
  />
);

export const IconEllipsis = (props: { color: string }) => (
  <FontAwesome6
    name="ellipsis"
    size={DEFAULT_ICON_SIZE}
    color={props.color}
    iconStyle={DEFAULT_ICON_STYLE}
  />
);
