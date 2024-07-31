import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const LoginSignUp = () => {
  return (
    <Dialog>
      <DialogTrigger className='inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-sky-400 hover:bg-sky-700 focus:shadow-outline focus:outline-none'>
        LogIn / SignUp
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>LogIn with Google</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default LoginSignUp;
