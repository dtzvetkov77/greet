import {Button} from "@nextui-org/react";
import Link from "next/link";

export default function AddToCartButton() {
  return (
    <Link href={'https://greet.bg/?add-to-cart=5589'}>
    <Button radius="full" className="primary absolute z-20 left-1/2 transform -translate-x-1/2 bottom-2 text-white bg-black shadow-lg dark:bg-white dark:text-black ">
    Добави в количката
  </Button>
  </Link>
  );
}

