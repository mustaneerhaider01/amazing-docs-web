"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { toast } from "sonner";

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";

import { Id } from "../../convex/_generated/dataModel";
import { api } from "../../convex/_generated/api";

interface RemoveDialogProps {
  documentId: Id<"documents">;
  children: React.ReactNode;
}

const RemoveDialog = ({ documentId, children }: RemoveDialogProps) => {
  const remove = useMutation(api.documents.removeById);
  const [isRemoving, setIsRemoving] = useState(false);

  const onRemove = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsRemoving(true);

    try {
      await remove({ id: documentId });
    } catch (err) {
      toast.error((err as Error)?.message);
    } finally {
      setIsRemoving(false);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent onClick={(e) => e.stopPropagation()}>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            document.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={(e) => e.stopPropagation()}
            disabled={isRemoving}
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={onRemove} disabled={isRemoving}>
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default RemoveDialog;
