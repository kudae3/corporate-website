import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type Alerts = {
  title?: string;
  children: React.ReactNode;
  cancel?: string;
  action: string;
  trigger?: React.ReactNode;
  btnDisabled?: boolean;
  onAction?: () => void;
};

export function Alert({
  title,
  cancel = "Cancel",
  action,
  children,
  trigger,
  btnDisabled = false,
  onAction,
}: Alerts) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription asChild>
            <div>{children}</div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="cursor-pointer hover:bg-slate-700">
            {cancel}
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={onAction}
            className="cursor-pointer"
            disabled={btnDisabled}
          >
            {action}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
