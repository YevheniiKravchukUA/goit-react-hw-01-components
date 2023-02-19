import { Section } from 'components/Section/Section';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { Transactions } from 'components/Transactions/Transactions';
import data from 'data/user.json';
import statistics from 'data/statistics.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export function App() {
  return (
    <>
      <Section>
        <Profile data={data} task="Task #1" />
      </Section>
      <Section>
        <Statistics title="Upload stats" stats={statistics} task="Task #2" />
        <Statistics stats={statistics} />
      </Section>
      <Section>
        <FriendList friends={friends} task="Task #3" />
      </Section>
      <Section>
        <Transactions items={transactions} task="Task #4" />
      </Section>
    </>
  );
}
