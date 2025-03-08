import { Button } from "@mantine/core";
import classes from "./style.module.scss";
import { TextInput } from "../components";

const Login = () => {
  return (
    <>
      <div>
        <p className={classes["title"]}>پروفایل</p>
      </div>
      <div className={classes["name-wrapper"]}>
        <TextInput
          className={classes["input"]}
          width={160}
          radius={20}
          size="lg"
          placeholder="نام"
        />
        <TextInput
          className={classes["input"]}
          width={160}
          radius={20}
          size="lg"
          placeholder="نام‌خانوادگی"
        />
      </div>
      <TextInput
        width={"100%"}
        radius={20}
        type="number"
        size="lg"
        placeholder="شماره تماس"
      />
      <Button
        className={classes["button"]}
        radius={20}
        size="lg"
        fullWidth
        variant="filled"
      >
        ادامه
      </Button>
    </>
  );
};

export default Login;
