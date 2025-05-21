// src/auth/Auth0ProviderWithNavigate.tsx

import { Auth0Provider } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

export default function Auth0ProviderWithNavigate({ children }: Props) {
  const navigate = useNavigate();
  const [callbackReady, setCallbackReady] = useState<(() => void) | null>(null);

  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;
  const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

  if (!domain || !clientId || !redirectUri || !audience) {
    throw Error('Error al inicializar Auth0');
  }

  // Esperar a que navigate esté listo
  useEffect(() => {
    const callback = () => {
      navigate('/auth-callback');
    };
    setCallbackReady(() => callback);
  }, [navigate]);

  // Mientras no está listo, no renderizar Auth0Provider
  if (!callbackReady) return null;

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
        audience,
      }}
      onRedirectCallback={callbackReady}
    >
      {children}
    </Auth0Provider>
  );
}
