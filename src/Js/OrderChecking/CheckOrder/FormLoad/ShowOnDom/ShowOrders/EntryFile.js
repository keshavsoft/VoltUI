import { StartFunc as GetFetch } from './GetFetch.js'
import { StartFunc as afterFetch } from './afterFetch/EntryFile.js'

const startFunc = async () => {
  jFLocalShowLoading();

  let localResponse = await GetFetch();
  afterFetch({ inData: localResponse });

  jFLocalHideLoading();
};

const jFLocalShowLoading = () => {
  let jVarLocalLoadingButtonId = document.getElementById('LoadingButtonId');
  jVarLocalLoadingButtonId?.classList.remove('d-none');

  let jVarLocalRefreshATagId = document.getElementById('RefreshATagId');
  jVarLocalRefreshATagId?.classList.add('d-none');
};

const jFLocalHideLoading = () => {
  let jVarLocalLoadingButtonId = document.getElementById('LoadingButtonId');
  jVarLocalLoadingButtonId?.classList.add('d-none');

  let jVarLocalRefreshATagId = document.getElementById('RefreshATagId');
  jVarLocalRefreshATagId?.classList.remove('d-none');
};
export { startFunc };
