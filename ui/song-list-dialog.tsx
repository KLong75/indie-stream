import { useRef } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Button from "./button";
import SongListComboBox, { SongListComboBoxOption } from "./song-list-combobox";

type SongListDialogProps = {
  icon: React.ReactNode;
  label: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  options: SongListComboBoxOption[];
  value: string | null;
  onChange: (value: string | null) => void;
  query: string;
  setQuery: (query: string) => void;
  dialogTitle?: string;
};

export default function SongListDialog({
  icon,
  label,
  open,
  setOpen,
  options,
  value,
  onChange,
  query,
  setQuery,
  dialogTitle,
}: SongListDialogProps) {
  const inputRef = useRef<HTMLInputElement>(
    null
  ) as React.RefObject<HTMLInputElement>;

  return (
    <>
      <Button
        title={label}
        icon={icon}
        onClick={() => setOpen(true)}
        className="mx-auto"
        aria-label={label}
      />
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <DialogPanel className="bg-gray-900 border-2 rounded-lg p-6 w-11/12 max-w-md">
          <DialogTitle className="text-lg text-center font-semibold">
            {dialogTitle || label}
          </DialogTitle>
          <SongListComboBox
            options={options}
            value={value}
            onChange={(val) => {
              onChange(val);
              inputRef.current?.blur();
              setOpen(false);
            }}
            query={query}
            setQuery={setQuery}
            inputRef={inputRef}
          />
        </DialogPanel>
      </Dialog>
    </>
  );
}
