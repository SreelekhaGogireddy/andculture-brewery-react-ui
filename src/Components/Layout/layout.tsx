import "../Styles/brewery.scss";
import { Header } from "../Header/header";
type Props = {};

export const Layout: React.FC<Props> = ({
        children,
      })=>
   (
    <div>
      <div className="app">
        <Header/>
        {children}
      </div>
    </div>
  );
