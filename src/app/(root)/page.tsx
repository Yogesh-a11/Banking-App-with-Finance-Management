import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'

const Home = () => {
    const loggedIn = { firstName: 'Yogesh', lastName: 'Godara', email: '4V0rM@example.com' }
    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox 
                        type="greeting"
                        title="Welcome"
                        user= {loggedIn?.firstName || 'guest'}
                        subtext="Access and manage your account and transactions easily"                
                    />
                    <TotalBalanceBox 
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1221.34}
                        />
                </header>

                {/* RECENT TRASACTIONS */}
            </div>

            <RightSidebar
                user={loggedIn}
                transactions={[]}
                banks={[{ currentBalance: 1231.43}, { currentBalance: 131.43}]}
            />
        </section>
    )
}

export default Home
