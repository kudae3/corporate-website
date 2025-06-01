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
  title: string;
  children: React.ReactNode;
  cancel?: string;
  action: string;
  trigger?: React.ReactNode;
  onAction?: () => void;
};

export function Alert({
  title,
  cancel = "Cancel",
  action,
  children,
  trigger,
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
          <AlertDialogAction onClick={onAction} className="cursor-pointer">
            {action}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
