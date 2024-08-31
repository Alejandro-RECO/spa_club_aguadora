import { MEDIA_PATHS } from "../../../Utils/Writers"
import { LinkComponet } from "../../../components/Link"
export const Nav = () => {
  return (
    <nav className="w-[40%]">
      <ul className="h-full p-3 flex items-center justify-center gap-x-8 ">
         <LinkComponet to={MEDIA_PATHS.NAV_LINKS.HOME} text={MEDIA_PATHS.HEADER.ELEMETS_TEXT.HOME} />
         <LinkComponet to={MEDIA_PATHS.NAV_LINKS.RESTAURANT} text={MEDIA_PATHS.HEADER.ELEMETS_TEXT.RESTAURANT} />
         <LinkComponet to={MEDIA_PATHS.NAV_LINKS.ABOUT_US} text={MEDIA_PATHS.HEADER.ELEMETS_TEXT.ABOUT_US} />
      </ul>
    </nav>
  )
}
