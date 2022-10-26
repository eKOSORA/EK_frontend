import { useRouter } from "next/router";
import React from "react";
import swal from "sweetalert";

export const confirmCancellation = (text: string, path: string) => {

  const alertUser: any = swal({
    title: "Are you sure?",
    text: "Once cancelled you'll start from zero",
    icon: "warning",
    dangerMode: true,
  });

  alertUser.then((willDelete: any) => {
    if (willDelete) {
      swal({
        title: "",
        text: text,
        icon: "success",
        dangerMode: false,
      });
      window.location.replace(path);
    }
  });
};
