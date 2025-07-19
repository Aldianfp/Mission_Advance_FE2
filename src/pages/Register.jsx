import NavPar from "../components/molecules/NavPar";
import GoogleBtn from "../components/atoms/GoogleBtn";
import RegisterForm from "../components/molecules/RegisterForm";
import DescAuth from "../components/atoms/DescAuth";

export default function Register() {
  return (
    <>
      <NavPar />
      <div class="min-h-screen px-3 py-5 mt-10 mb-20 w-1/3 mx-auto bg-white">
        <DescAuth
          mainTitle="Pendaftaran Akun"
          subTitle="Yuk, daftarkan akunmu sekarang juga!"
        />
        <div class="mt-9 md:mx-auto md:w-full md:max-w-md">
          <RegisterForm
            name="Nama Lengkap"
            email="E-mail"
            password="Kata Sandi"
            confirmPassword="Konfirmasi Kata Sandi"
          ></RegisterForm>
          <div class="inline-flex items-center justify-center w-full">
            <hr class="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <span class="absolute px-3 font-light dm-sans-fonts text-gray-500 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900 cursor-default">
              atau
            </span>
          </div>
          <GoogleBtn />
        </div>
      </div>
    </>
  );
}
