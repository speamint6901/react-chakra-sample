import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";

type Props = {
  title: string;
  status: "info" | "warning" | "success" | "error";
};

// メッセージダイアログ
export const useMessage = () => {
  const toast = useToast();
  const showMessage = useCallback(
    (props: Props) => {
      const { title, status } = props;
      toast({
        title,
        status,
        position: "top", // 表示位置
        duration: 2000, // 2秒後に消える
        isClosable: true // 閉じれるかどうか
      });
    },
    [toast]
  );
  return { showMessage };
};
