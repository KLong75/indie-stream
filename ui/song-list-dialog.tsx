// import from react
import { useRef } from "react";
// import from headlessui 
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
// import from react icons
import { RiCloseCircleFill } from "react-icons/ri";
// import components
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
        <DialogPanel className="relative bg-gray-900 border-2 rounded-lg p-6 w-11/12 max-w-md">
        <Button
            icon={<RiCloseCircleFill className="size-6 absolute top-2 right-2" />}
            title="Close"
            onClick={() => setOpen(false)}
          />  
          <DialogTitle className="text-lg text-center font-semibold -mt-2 mb-2">
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
