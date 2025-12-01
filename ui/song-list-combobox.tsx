import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { RxChevronDown, RxCheck } from "react-icons/rx";
import clsx from "clsx";
import { useRef } from "react";

export type SongListComboBoxOption = {
  value: string;
  label: string;
};

type SongListComboBoxProps<T> = {
  label?: string;
  options: SongListComboBoxOption[];
  value: string | null;
  onChange: (value: string | null) => void;
  query: string;
  setQuery: (query: string) => void;
  inputRef?: React.RefObject<HTMLInputElement>;
  className?: string;
};

export default function SongListComboBox({
  label,
  options,
  value,
  onChange,
  query,
  setQuery,
  inputRef,
  className = "",
}: SongListComboBoxProps<any>) {
  const filteredOptions =
    query === ""
      ? options
      : options.filter((option) =>
          option.label.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <div className={className}>
      <h3 className="text-center text-sm pb-1">{label}</h3>
      <Combobox value={value} onChange={onChange} onClose={() => setQuery("")}>
        <div className="relative">
          <ComboboxInput
            ref={inputRef}
            className={clsx(
              "w-full rounded-lg border-none bg-white/5 py-1 pr-6 pl-2 text-sm/6 text-white",
              "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white outline-1 outline-white/25"
            )}
            displayValue={() => ""}
            placeholder={label}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <ComboboxButton className="group absolute inset-y-0 right-0 px-1">
            <RxChevronDown
              className="size-4 fill-white/60 group-data-hover:fill-white"
              tabIndex={0}
            />
          </ComboboxButton>
        </div>
        <ComboboxOptions
          anchor="bottom"
          transition
          className={clsx(
            "bg-gray-900 w-(--input-width) rounded-xl border border-white/5 bg-black/100 p-1 [--anchor-gap:--spacing(1)] empty:invisible ",
            "transition duration-100 ease-in data-leave:data-closed:opacity-0 outline-1 outline-white"
          )}>
          {filteredOptions.map((option) => (
            <ComboboxOption
              key={option.value}
              value={option.value}
              className="group flex cursor-default items-center gap-2 rounded-lg p-0 select-none data-focus:bg-white/10"
            >
              <RxCheck className="invisible size-4 fill-white group-data-selected:visible" />
              <div className="text-sm/6 text-white">{option.label}</div>
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
    </div>
  );
}