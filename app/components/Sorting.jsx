import { Select, SelectItem } from "@nextui-org/react";
import { ArrowDown, ArrowUp, ArrowDownAZ, ArrowUpZA } from 'lucide-react';

export default function SortDropdown({ onSortChange }) {
    return (
      <div className="flex justify-center w-full flex-wrap md:flex-nowrap gap-4">
        <Select
  label="Сортиране по цена"
  className="max-w-xs"
  onChange={(e) => {
    console.log("Sort order selected:", e.target.value);
    onSortChange(e.target.value);
  }}
>
  <SelectItem startContent={<ArrowUp size={16}/>}value="lowToHigh">Най-ниска към най-виока</SelectItem>
  <SelectItem startContent={<ArrowDown size={16}/>} value="highToLow">Най-висока към най-ниска</SelectItem>
  <SelectItem startContent={<ArrowDownAZ size={16}/>} value="alphabetic">По име (А-Я)</SelectItem>
  <SelectItem startContent={<ArrowUpZA size={16}/>} value="alphabetic">По име (Я-А)</SelectItem>
</Select>

      </div>
    );
  }
  