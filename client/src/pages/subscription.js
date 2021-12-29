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

   const getSubscription = (e) => {
    e.preventDefault();

    axios
      .get('/api/auth/getAllSubs')
      .then((res) => {
        const subs = res.data.subscriptions;
        setSubscriptions(subs);
        // for (let i = 0; i < subs.length; i++) {
        //   const element = subs[i];
        //   console.log(element);
        // }
        // setSubscription(element);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleInput = (event) => {
    const url_link = event.target.value;
    const urlStringify = JSON.stringify(url_link);
    setUrl(urlStringify);
  };

  function deleteSubscription(id) {
    API.deleteSubs(id)
      .then((res) => loadSubscription())
      .catch((err) => console.log(err));
  }

  const classes = useStyles();
