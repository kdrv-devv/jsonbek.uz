import { useToast } from '@/hooks/use-toast'

export function useMyToast() {
  const { toast } = useToast()

  return (message: string) =>
    toast({
      title: message,
      description: null,
      duration: 2000,
      className:"border-green-500 text-green-600 border shadow-md bg-white/80 backdrop-blur-sm"
    })
}