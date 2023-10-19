import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/react";
import AddToCartButton from "./Button";
import { useState } from "react";
import { Chip } from "@nextui-org/chip";
export default function Post({
  name,
  price,
  imageUrl,
  description,
  categories,
}) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const truncateText = (text, length) => {
    if (text.length <= length) return text;
    return text.substring(0, length) + "...";
  };
  const formattedPrice = (parseFloat(price) / 100).toFixed(2);
  const formattedDescription = description.replace(/<\/?p>/g, "");
  return (
    <Card className="py-4 h-[720px] relative">
      <CardHeader className="pb-0 pt-2 flex-col items-center">
        <div className="flex justify-center flex-row flex-shrink flex-wrap mb-3">
          {categories.map((category) => (
            <Chip size="sm" className="m-1 mb-2">{category.name}</Chip>
          ))}
        </div>
        <Image
          alt="Card background"
          className="rounded-xl mb-5 cursor-pointer"
          src={imageUrl}
          width={200}
        />
      </CardHeader>
      <CardBody className="py-2 flex flex-col items-center relative">
        <p className="text-tiny uppercase font-bold">{name}</p>
        <small className="text-default-500 mb-3">{formattedPrice}лв.</small>
        
        <p className="mb-4 text-sm px-4 text-center">
          {showFullDescription
            ? formattedDescription.substring(0, 80)
            : truncateText(formattedDescription, 60)}
          {formattedDescription.length > 100 && (
            <button
              onClick={() => setShowFullDescription(!showFullDescription)}
              className="text-white mb-3 text-bold-700  hover:underline"
            >
              {showFullDescription ? "Прочети по-малко" : "Прочети повече"}
            </button>
          )}
        </p>

        <AddToCartButton/>
      </CardBody>
    </Card>
  );
}
