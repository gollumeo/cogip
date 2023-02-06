<?php

namespace App\Controllers;

use App\Core\Controller;

class InvoicesController extends Controller
{
    public function index()
    {
        // Fetch all invoices from the database
        $invoices = $this->db->query("SELECT * FROM invoices");

        return response()->json([
            'data' => $invoices
        ], 200);
    }

    public function show($id)
    {
        // Fetch a single invoice by its ID from the database
        $invoice = $this->db->query("SELECT * FROM invoices WHERE id = :id", [
            'id' => $id
        ]);

        return response()->json([
            'data' => $invoice
        ], 200);
    }

    public function store($request)
    {
        // Validate the incoming data
        $data = validate($request->getParams(), [
            'customer_id' => 'required',
            'amount' => 'required|numeric',
            'due_date' => 'required|date'
        ]);

        // Insert the validated data into the database
        $this->db->query("INSERT INTO invoices (customer_id, amount, due_date) VALUES (:customer_id, :amount, :due_date)", [
            'customer_id' => $data['customer_id'],
            'amount' => $data['amount'],
            'due_date' => $data['due_date']
        ]);

        return response()->json([
            'message' => 'Invoice created successfully'
        ], 201);
    }

    public function update($request, $id)
    {
        // Validate the incoming data
        $data = validate($request->getParams(), [
            'customer_id' => 'sometimes|required',
            'amount' => 'sometimes|required|numeric',
            'due_date' => 'sometimes|required|date'
        ]);

        // Update the existing invoice in the database
        $this->db->query("UPDATE invoices SET customer_id = :customer_id, amount = :amount, due_date = :due_date WHERE id = :id", [
            'id' => $id,
            'customer_id' => $data['customer_id'],
            'amount' => $data['amount'],
            'due_date' => $data['due_date']
        ]);

        return response()->json([
            'message' => 'Invoice updated successfully'
        ], 200);
    }

    public function delete($id)
    {
        // Delete the invoice from the database
        $this->db->query("DELETE FROM invoices WHERE id = :id", [
            'id' => $id
        ]);

        return response()->json([
            'message' => 'Invoice deleted successfully'
        ], 200);
    }
}
