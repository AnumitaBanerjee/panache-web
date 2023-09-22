import AuthLayout from '../../components/layout/AuthLayout';
import LandingLayout from '../../components/layout/LandingLayout';
import DashboardLayout from '../../components/layout/DashboardLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@/styles/style.scss'

export default function App({ Component, pageProps }) {
  const layoutName = pageProps.layout ?? 'LandingLayout'
   if (layoutName === "LandingLayout") {
    return (
      <>
        <LandingLayout>
          <Component {...pageProps} />
        </LandingLayout>
      </>
    )
  }
  else if (layoutName === "AuthLayout") {
    return (
      <>
        <AuthLayout>
          <Component {...pageProps} />
        </AuthLayout>
      </>
    )
  }
  else if (layoutName === "DashboardLayout") {
    return (
      <>
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      </>
    )
  }
}
