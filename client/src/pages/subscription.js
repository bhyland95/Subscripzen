const Subscription = () => {
  const [value, onChange] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [subscriptions, setSubscriptions] = useState([]);
  const [url, setUrl] = useState();

  useEffect(() => {
    loadSubscription();
    expoMailer();

    // loadBooks() // this would have loaded the subscriptions
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const loadSubscription = () => {
    axios
      .get('/api/auth/getAllSubs')
      .then((res) => {
        const subs = res.data.subscriptions;
        setSubscriptions(subs);
      })
      .catch((err) => {
        console.log(err);
      });
  };
