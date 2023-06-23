import { TabGroup } from '#/ui/tab-group';
import React from 'react';

export const metadata = {
  title: 'Loading',
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-9">
      <div className="flex flex-wrap items-center gap-2">
        <TabGroup
          path="/bitcoin"
          items={[
            {
              text: 'Home',
            },
            {
              text: 'Trading History',
              slug: 'history',
            },
          ]}
        />

        <div className="self-start">rating here!!!</div>
      </div>

      <div>{children}</div>
    </div>
  );
}
