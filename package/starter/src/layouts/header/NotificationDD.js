import { ListGroup, ListGroupItem } from 'reactstrap';
import { User, Link, Calendar, Settings } from 'react-feather';

const messages = [
  {
    id: 1,
    iconclass: <Link />,
    iconbg: 'warning',
    title: 'Launch Admin',
    desc: 'Just see my new admin!',
    time: '9:30 AM',
  },
  {
    id: 2,
    iconclass: <Calendar />,
    iconbg: 'success',
    title: 'Event Today',
    desc: 'Just a reminder that you have event.',
    time: '9:10 PM',
  },
  {
    id: 3,
    iconclass: <Settings />,
    iconbg: 'info',
    title: 'Settings',
    desc: 'You can customize this template as you want.',
    time: '9:08 AM',
  },
  {
    id: 4,
    iconclass: <User />,
    iconbg: 'danger',
    title: 'Check Email',
    desc: 'Just check my admin!',
    time: '9:02 AM',
  },
];

const NotificationDD = () => {
  return (
    <div>
      <ListGroup flush>
        {messages.map((msg) => (
          <ListGroupItem action key={msg.id} tag="a" href="/">
            <div className="d-flex align-items-center gap-3 py-2">
              <div
                className={`circle-box md-box flex-shrink-0 bg-light-${msg.iconbg} text-${msg.iconbg}`}
              >
                {msg.iconclass}
              </div>
              <div className="col-9">
                <h6 className="mb-0">{msg.title}</h6>
                <span className="text-muted text-truncate d-block">{msg.desc}</span>
                <small className="text-muted">{msg.time}</small>
              </div>
            </div>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default NotificationDD;
