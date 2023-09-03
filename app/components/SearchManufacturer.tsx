"use client";

import React from "react";
import { SearchManufacturerProps } from "../types";
import { useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";

const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) => {
  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full"></div>
        <Combobox.Button className="absolute top-[14px]">
          <Image
            src="/car-logo.svg"
            width={20}
            height={20}
            className="ml-4"
            alt="Car Logo"
          />
        </Combobox.Button>

        <Combobox.Input className="search-manufacturer__input" />
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
