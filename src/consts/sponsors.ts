import type { Sponsors } from "../types/sponsors";

import Alsa from "../assets/sponsors/Alsa.svg";
import Revolut from "../assets/sponsors/Revolut.svg";
import Cerave from "../assets/sponsors/Cerave.svg";
import CocaCola from "../assets/sponsors/CocaCola.svg";
import Grefusa from "../assets/sponsors/Grefusa.svg";
import Infojobs from "../assets/sponsors/Infojobs.svg";
import Maxibon from "../assets/sponsors/Maxibon.svg";
import Nothing from "../assets/sponsors/Nothing.svg";
import Spotify from "../assets/sponsors/Spotify.svg";
import Vicio from "../assets/sponsors/Vicio.svg";
import Mahou from "../assets/sponsors/Mahou.svg";

export const SPONSORS: Sponsors[] = [
  {
    id: "alsa",
    name: "Alsa",
    url: "htpps:www.alsa.com",
    image: {
      logo: Alsa,
      width: 200,
      height: 200,
    },
  },
  {
    id: "revolut",
    name: "Revolut",
    url: "htpps:www.revolut.com",
    image: {
      logo: Revolut,
      width: 200,
      height: 200,
    },
  },
  {
    id: "cerave",
    name: "Cerave",
    url: "htpps:www.cerave.com",
    image: {
      logo: Cerave,
      width: 200,
      height: 200,
    },
  },
  {
    id: "coca-cola",
    name: "Coca-Cola",
    url: "htpps:www.coca-cola.com",
    image: {
      logo: CocaCola,
      width: 200,
      height: 200,
    },
  },
  {
    id: "grefusa",
    name: "Grefusa",
    url: "htpps:www.grefusa.com",
    image: {
      logo: Grefusa,
      width: 200,
      height: 200,
    },
  },
  {
    id: "infojobs",
    name: "Infojobs",
    url: "htpps:www.infojobs.net",
    image: {
      logo: Infojobs,
      width: 200,
      height: 200,
    },
  },
  {
    id: "maxibon",
    name: "Maxibon",
    url: "htpps:www.maxibon.com",
    image: {
      logo: Maxibon,
      width: 200,
      height: 200,
    },
  },
  {
    id: "nothing",
    name: "Nothing",
    url: "htpps:www.nothing.com",
    image: {
      logo: Nothing,
      width: 200,
      height: 200,
    },
  },
  {
    id: "spotify",
    name: "Spotify",
    url: "htpps:www.spotify.com",
    image: {
      logo: Spotify,
      width: 200,
      height: 200,
    },
  },
  {
    id: "vicio",
    name: "Vicio",
    url: "htpps:www.vicio.com",
    image: {
      logo: Vicio,
      width: 200,
      height: 200,
    },
  },
  {
    id: "mahou",
    name: "Mahou",
    url: "htpps:www.mahou.com",
    image: {
      logo: Mahou,
      width: 200,
      height: 200,
    },
  },
] as const
