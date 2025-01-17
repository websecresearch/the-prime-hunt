import React from 'react';
import { observer } from 'mobx-react-lite';
import { useIntegrationsStore } from '../../../../stores';
import { Integration } from '../../Integration/Integration';
import SimpleBar from 'simplebar-react';
import './styles.scss';

export const IntegrationContentView: React.FC = observer(() => {
  const integrationsStore = useIntegrationsStore();

  return (
    <SimpleBar className="integration-content-view">
      {
        integrationsStore.integrations.map(({ url, name, id }) => {
          return (
            <Integration key={id} name={name} url={url} id={id} />
          );
        })
      }
    </SimpleBar>
  );
});
