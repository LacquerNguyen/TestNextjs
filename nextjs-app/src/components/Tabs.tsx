import { useState } from 'react';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
interface TabContent {
    label: string;
    items: ListItem[];
}

interface ListItem {
    title: string;
    imageUrl: string;
    link: string;
}

interface TabProps {
    tabs: TabContent[];
}

const Tabs = ({ tabs }: TabProps) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    return (
        <div className="tabs-wrap">
            <div className="tab-buttons d-flex flex-wrap">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => handleTabClick(index)}
                        className={index === activeTab ? 'active' : ''}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="tab-content d-flex flex-wrap">

                {tabs[activeTab].items.map((item, index) => (

                    <div key={index} className="tab-content-item col-12 pb-4 col-md-6 col-lg-4">
                        <a href={item.link} className="fly-sm">
                            <div className="card bg-white rounded-lg overflow-hidden  shadow">
                                <img decoding="async" width="418" height="418" src={item.imageUrl} className="card-img-top img-fluid" alt={item.title} loading="lazy" />
                                <div className="caption-link">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h6 className="card-title mb-0 text-heading-default"><strong>{item.title}</strong></h6>
                                  
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tabs;