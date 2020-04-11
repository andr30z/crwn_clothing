import { createSelector } from "reselect";

const selectDiretorio = state => state.diretorio

export const selectDiretorioSections = createSelector(
  [selectDiretorio],
  (diretorio) => diretorio.sections
)