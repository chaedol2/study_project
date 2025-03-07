import BackButton from "@/app/(afterLogin)/_component/BackButton";
import SearchForm from "../_component/SearchForm";
import style from './search.module.css';
import Tab from "@/app/(afterLogin)/search/_component/Tab";
import Post from "@/app/(afterLogin)/_component/Post";
import SearchResult from "@/app/(afterLogin)/search/_component/SearchResult";

type Props = {
    searchParams: Promise<{ q: string, f?: string, pf?:string }>;
}
export default async function Search({searchParams}: Props) {
    const query = await searchParams;
  return (
      <main className={style.main}>
          <div className={style.searchTop}>
              <div className={style.searchZone}>
                  <div className={style.buttonZone}>
                      <BackButton />
                  </div>
                  <div className={style.formZone}>
                      <div style={{marginBottom: 60, width: 'inherit'}}>
                        <SearchForm q={query.q} f={query.f} pf={query.pf} />
                      </div>
                  </div>
              </div>
              <Tab />
          </div>
          <div className={style.list}>
              <SearchResult searchParams={query} />
          </div>
      </main>
  );
}
