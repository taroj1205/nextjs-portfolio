import { MenuItemComponent } from "./mobile-item-component"
import type { DropdownProps } from "components/navbar/dropdown"

export const renderMenuItems = (items: DropdownProps["items"]) =>
  items.map((item) => <MenuItemComponent key={item.href} {...item} />)
