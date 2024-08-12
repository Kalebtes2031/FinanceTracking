import { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { useFinancialRecords } from "../../context/financial-record-context";
import { TextField, MenuItem, Button, Box, Container, Typography, Card, CardContent } from '@mui/material';

export const FinancialRecordForm = () => {
  const [description, setDescription] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const { addRecord } = useFinancialRecords();
  const { user } = useUser();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newRecord = {
      userId: user?.id ?? "",
      date: new Date(),
      description: description,
      amount: parseFloat(amount),
      category: category,
      paymentMethod: paymentMethod,
    };

    addRecord(newRecord);
    setDescription("");
    setAmount("");
    setCategory("");
    setPaymentMethod("");
  };

  return (
    <Container
      sx={{
        mt: 5,
        mb: 5,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Card
        sx={{
          maxWidth: 600,
          width: '100%',
          background: 'linear-gradient(135deg, #e3f2fd, #bbdefb)',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
          borderRadius: '15px',
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            align="center"
            sx={{
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 700,
              color: '#0d47a1',
            }}
          >
            Add Financial Record
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
          >
            <TextField
              label="Description"
              variant="outlined"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              fullWidth
            />
            <TextField
              label="Amount"
              type="number"
              variant="outlined"
              required
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              fullWidth
            />
            <TextField
              label="Category"
              select
              variant="outlined"
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              fullWidth
            >
              <MenuItem value="">Select a Category</MenuItem>
              <MenuItem value="Food">Food</MenuItem>
              <MenuItem value="Rent">Rent</MenuItem>
              <MenuItem value="Salary">Salary</MenuItem>
              <MenuItem value="Utilities">Utilities</MenuItem>
              <MenuItem value="Entertainment">Entertainment</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </TextField>
            <TextField
              label="Payment Method"
              select
              variant="outlined"
              required
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              fullWidth
            >
              <MenuItem value="">Select a Payment Method</MenuItem>
              <MenuItem value="Credit Card">Credit Card</MenuItem>
              <MenuItem value="Cash">Cash</MenuItem>
              <MenuItem value="Bank Transfer">Bank Transfer</MenuItem>
            </TextField>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Add Record
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};
