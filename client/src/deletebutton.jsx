import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const DeleteData = ({ deleteID, setDeleteID }) => {
  return (
    <Input
        type="text"
        placeholder="Enter Identification Number"
        value={deleteID}
        className="size-30 mt-10"
        align="right"
        onChange={(e) => setDeleteID(e.target.value)}
    />
  );
};

export default DeleteData;
