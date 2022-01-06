const Subscription = () => {
  const [value, onChange] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [subscriptions, setSubscriptions] = useState([]);
  const [url, setUrl] = useState();

  useEffect(() => {
    loadSubscription();
    expoMailer();

   // this would have loaded the subscriptions
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

   return (
    <div>
      <h1 className={classes.title}>Subscripzen - Subscriptions!</h1>
      <hr style={{ width: '50%'}}></hr>
      <Container component={Paper}>
        <Grid item xs={6}>
        <List className={classes.newSub}>
        <ListItemIcon><h1 className={classes.center1}>Subscriptions</h1></ListItemIcon>
        <ListItemIcon onClick={handleOpen} className={classes.button1}>
          <AddCircleIcon />
          <ListItemText color="primary" primary="Add a new Subscription" />
        </ListItemIcon>
      </List>
        </Grid>
      <Grid className={classes.root1} container direction="row" justify="center" alignItems="center">
        <Grid item xs>
          <div>
            {subscriptions.length ? (
              <div>
                
                <TableContainer padding="checkbox">
                  <Table
                    className={classes.table}
                    aria-labelledby="tableTitle"
                    aria-label="enhanced table"
                  >
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell>Cost</StyledTableCell>
                        <StyledTableCell>Start Date</StyledTableCell>
                        <StyledTableCell></StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {subscriptions.map((sub) => (
                        <StyledTableRow>
                          <TableCell>{sub.SubscriptionName}</TableCell>
                          <TableCell>${sub.cost}</TableCell>
                          <TableCell>{sub.startDate}</TableCell>                       
                          <TableCell>
                            {' '}
                            <Button
                              data-id={sub._id}
                              variant="contained"
                              color="inherit"
                              className={classes.button2}
                              onClick={() => deleteSubscription(sub._id)}
                            >
                              Delete
                            </Button>
                          </TableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            ) : (
              <h3 className={classes.title}>No Results to Display</h3>
            )}
          </div>
        </Grid>
      </Grid>
      
      <Grid container direction="row" justify="center" alignItems="center">
      <Box display={{ xs: 'block', xl: 'none' }}>
      <div className={classes.playerwrapper}>
        <ReactPlayer
          className={classes.reactplayer}
          height="50vh"
          width="50vh"
          url={url}
        />
      </div>
      </Box>
      </Grid>
<div>
        <Modal
          aria-labelledby="New Subscription"
          aria-describedby="new-subscription"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <NewSubscription />
            </div>
          </Fade>
        </Modal>
      </div>
      </Container>
    </div>
  );
};

export default Subscription;
