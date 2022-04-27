/** @jsx jsx */
import { jsx, Image } from "theme-ui";
import { Link } from "components/link";

export default function Logo({ image }) {
  return (
    <Link
      path="/"
      sx={{
        variant: "links.logo",
        display: "flex",
        width: "6vw",
        alignItems: "center",
      }}
    >
      <Image src={image} alt="landing logo" />
    </Link>
  );
}
