import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import styles from './SpfxcicdTestWpWebPart.module.scss';

export interface ISpfxcicdTestWpWebPartProps {
}

export default class SpfxcicdTestWpWebPart extends BaseClientSideWebPart<ISpfxcicdTestWpWebPartProps> {
  public render(): void {
    this.domElement.innerHTML = `<div class="${ styles.spfxcicdTestWp }"> Test Webpart for CICD</div>`;
  }

  protected onInit(): Promise<void> {
    return super.onInit();
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
}
