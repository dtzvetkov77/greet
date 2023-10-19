import {Select, SelectItem} from "@nextui-org/react";

export default function Categories({categories, onCategoryChange}) {
  return (
    <div className="flex justify-center w-full flex-wrap md:flex-nowrap gap-4">
      <Select 
        label="Избери категория" 
        className="max-w-xs"
        onChange={(e) => {
          const selectedValue = e.target.value;
          console.log("Selected Value:", selectedValue);
          onCategoryChange(selectedValue);
        }}
      >
        {categories.map((category) => (
          <SelectItem key={category.id} value={category.name}>
            {category.name}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}

